
import Seo from '../components/common/Seo'
import GitHubCalendar from 'react-github-calendar'

export default function Contact() {
  return (
    <section className="mt-20">
      <Seo title="Contact | Nishant Padhi | Senior Frontend Engineer" />
      <div className="space-y-2">
        <a href="#">LinkedIn</a><br/>
        <a href="#">GitHub</a><br/>
        <a href="#">Twitter (X)</a><br/>
        <a href="#">Medium</a>
      </div>

      <div className="mt-10">
        <GitHubCalendar username="NishantPadhi" />
      </div>

      <a href="/resume.pdf" download className="underline block mt-8">
        Download Resume
      </a>
    </section>
  )
}
