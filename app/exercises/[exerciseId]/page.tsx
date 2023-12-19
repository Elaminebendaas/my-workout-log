export default function Page({ params }: {params: {exerciseId: string}}) {


  return <p>Post: {params.exerciseId}</p>
}