import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>V</p>
        </div>
        <div>
          <p>Viacheslav</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            atque nulla sint saepe! At, eveniet!
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
