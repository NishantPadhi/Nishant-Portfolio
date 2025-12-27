
import Seo from '../components/common/Seo'
export default function Projects() {
  return (
    <section className="mt-20 grid md:grid-cols-2 gap-6">
      <Seo title="Projects | Nishant Padhi | Senior Frontend Engineer" />
      <div className="border p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="font-semibold">Virtual Medical Home</h3>
        <p className="text-sm mt-2">Healthcare appointment web app</p>
      </div>
      <div className="border p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="font-semibold">Saloon Finder</h3>
        <p className="text-sm mt-2">Android app for booking salons</p>
      </div>
    </section>
  )
}
