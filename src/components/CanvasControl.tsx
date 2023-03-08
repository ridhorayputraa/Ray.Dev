import { HiCheckCircle, HiTrash } from "react-icons/hi";
interface ControlProps {
  clearCanvas: () => void;
  color: string;
  setColor: (color: string) => void;
}

const CanvasControl = ({ clearCanvas, color, setColor }: ControlProps) => {
  const colors = [
    "rgba(99, 102, 241, 0.6)",
    "rgba(168, 85, 247, 0.6)",
    "rgba(236, 72, 153, 0.6)",
  ];

  return (
    <div className="absolute justify-center align-middle text-center sm:justify-center sm:text-center sm:align-middle sm:content-center right-3 p-2 bg-gray-200 dark:bg-zinc-800 rounded-full top-[25%] md:top-[unset] z-40">
      <div className="flex flex-col space-y-1">
        {colors.map((data, key) => {
          return (
            <button
              onClick={() => setColor(data)}
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: data }}
              key={key}
              aria-label="Change Brush Color"
            >
              {color === data && <HiCheckCircle className="mx-auto text-xl" />}
            </button>
          );
        })}

        <button
          className="w-8 h-8 rounded-full bg-gray-300 dark:bg-black"
          onClick={() => {
            clearCanvas();
          }}
          aria-label="Clear Canvas"
        >
          <HiTrash className="mx-auto" />
        </button>

        <button
          className="w-8 h-8 rounded-full bg-gray-300 dark:bg-black"
          aria-label="Clear Canvas"
        >
          <a href="#tech">
            {" "}
            <HiTrash className="mx-auto" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default CanvasControl;
