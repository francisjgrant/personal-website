import { useParams } from 'react-router-dom';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        {slug?.replace(/-/g, ' ')}
      </h1>
      <p className="text-lg text-gray-600">
        This is the project details page for <strong>{slug}</strong>.
      </p>
    </section>
  );
}


