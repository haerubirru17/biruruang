export default function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="#E8F4FD"
          opacity="0.7"
        />
        <path
          d="M0,55 C200,20 400,70 600,50 C800,30 1000,65 1200,45 C1300,35 1380,50 1440,55 L1440,80 L0,80 Z"
          fill="#E8F4FD"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
