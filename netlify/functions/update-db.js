exports.handler = async function(event) {

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN
  const OWNER = "USERNAME"
  const REPO = "REPO"
  const FILE_PATH = "db.json"

  const response = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    }
  )

  const fileData = await response.json()

  let content = JSON.parse(
    Buffer.from(fileData.content, "base64").toString()
  )

  const newData = JSON.parse(event.body)

  content.push(newData)

  const updated = Buffer.from(JSON.stringify(content, null, 2)).toString("base64")

  await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "update db",
        content: updated,
        sha: fileData.sha
      })
    }
  )

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  }
}