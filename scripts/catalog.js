const fetch = require('node-fetch');
const fs = require('fs')
const baseGithuAPIUrl = "https://api.github.com"

async function getSampleFiles(org, repo, branch = 'main') {
  const url = `${baseGithuAPIUrl}/repos/${org}/${repo}/git/trees/${branch}?recursive=1`
  console.log(url)
  const response = await fetch(url)
  const json = await response.json()
  const files = json.tree
    .filter(file => file.path.startsWith("samples/") && (file.path.endsWith(".conf") || file.path.endsWith(".overlay")))
    .map(file => file.path)
  return files
}

function groupFilesToSamples(files) {
  return files.reduce( (s, f) => {
    const parts = f.replace('samples/','').split('/')
    const filename = parts[parts.length - 1]
    if (filename === 'prj.conf'){
      return s
    }
    parts.pop()
    const sampleName = parts.filter(p => p !== 'boards').join('/')
    if(!s[sampleName]) {
      s[sampleName] = []
    }
    s[sampleName].push(filename)
    return s
  }, {})
}

async function main() {
  try {
    const files = await getSampleFiles('golioth', 'zephyr-sdk')
    const sampleFiles = groupFilesToSamples(files)

    const samples = Object.keys(sampleFiles).map( key => {
      const boardNames = sampleFiles[key].filter( f => f.endsWith('.conf')).map( f => f.replace('.conf',''))
      const overlays = sampleFiles[key].filter( f => f.endsWith('.overlay')).map( f => f.replace('.overlay',''))
      const boards = boardNames.map( board => {
        const boardInfo = {
          name: board,
          overlays : []
        }
        for (let i = 0; i < overlays.length; i++) {
          const overlay = overlays[i]
          if (overlay.includes(board)) {
            boardInfo.overlays.push(overlay)
          }
        }
        return boardInfo
      })
      return {
        name: key,
        boards,
      }
    })
    console.log(samples)
    fs.writeFileSync('./docs/partials/assets/samples.json', JSON.stringify(samples, null, 2))
  }catch(err){
    console.log(err)
  }
}

main()