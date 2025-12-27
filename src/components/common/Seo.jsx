
import { Helmet } from 'react-helmet-async';

export default function Seo({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Senior Frontend Engineer, React specialist, Walmart, FactSet" />
    </Helmet>
  )
}
