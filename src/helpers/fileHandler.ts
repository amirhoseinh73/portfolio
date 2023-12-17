import { promises as fs } from "fs"
import { __DIR_DATA__ } from "./config"

export const ReadJson = async function (dir: string) {
  const file = await fs.readFile(process.cwd() + dir, "utf8")
  return JSON.parse(file)
}

export const ReadGlobalData = async function () {
  return (await ReadJson(__DIR_DATA__)) as GlobalData
}
