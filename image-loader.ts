export default function imageLoader({
  src,
}: {
  src: string;
  width?: number;
  quality?: number;
}) {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/personal_website" : "";
  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }
  return src;
}
