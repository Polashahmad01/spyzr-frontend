
export default function PricingFeature({ feature }) {
  return (
    <div>
      {feature.map(item => (
        <li key={item}>{item}</li>
      ))}
    </div>
  )
}
