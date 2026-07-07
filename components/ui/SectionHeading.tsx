interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16">
      <p className="text-blue-400 text-sm uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}