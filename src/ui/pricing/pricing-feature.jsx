
export default function PricingFeature({ feature }) {
  return (
    <ul>
      {feature.map(item => (
        <li className="list-none" key={item}>{item}</li>
      ))}
    </ul>
  )
}
