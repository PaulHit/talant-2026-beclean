const PREVIEW_IMAGES = [
  '/galerie/IMG_0013.jpg',
  '/galerie/IMG_0160.jpg',
  '/galerie/IMG_0113.jpg',
  '/galerie/IMG_0134.jpg',
  '/galerie/IMG_0167.jpg',
  '/galerie/IMG_0402.jpg',
  '/galerie/IMG_0237.jpg',
  '/galerie/IMG_0269.jpg',
  '/galerie/IMG_0350.jpg',
  '/galerie/IMG_0449.jpg',
  '/galerie/IMG_0485.jpg',
  '/galerie/IMG_0384.jpg',
];

export default function GalleryPreview() {
  return (
    <div className="flex flex-col gap-3 mt-6">
      {PREVIEW_IMAGES.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="rounded-xl object-cover w-full"
          loading="lazy"
        />
      ))}
    </div>
  );
}
