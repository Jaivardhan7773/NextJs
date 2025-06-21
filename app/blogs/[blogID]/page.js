
export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}


export default async function Blog({ params }) {
  const { blogID } = await params;
  return <div>Blogs folder slug is  {blogID}</div>;
}