import { AiOutlineCheckCircle } from "react-icons/ai";

export default function PricingFeature({ feature }) {
  return (
    <ul className="flex flex-wrap flex-col gap-1">
      {feature.map(item => (
        <li className="list-none text-sm flex flex-wrap items-center gap-2" key={item}>
          <AiOutlineCheckCircle />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
