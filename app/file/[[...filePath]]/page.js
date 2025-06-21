
export const metadata = {
  title: {
  absolute: "My files "
  }
}


export default async function File({params}) {
    const {filePath} = await params;
    console.log(filePath)
  return (
    <div>

        <h1>file/ <i>{filePath?.join("/")}</i></h1>
    </div>
  )
}
