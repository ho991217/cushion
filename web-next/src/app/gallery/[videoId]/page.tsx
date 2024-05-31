type Event = {
  uploadTime: string;
  title: string;
  videoUrl: string;
};

export default async function EventPage({
  params: { videoId },
}: {
  params: {
    videoId: string;
  };
}) {
  const data = (await (
    await fetch(`http://43.201.222.62:8080/fall_event/${videoId}`)
  ).json()) as Event;

  return (
    <div>
      <video src={data.videoUrl} controls />
      <h1>{data.title}</h1>
      <p>{data.uploadTime}</p>
    </div>
  );
}
