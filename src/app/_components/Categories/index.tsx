import Link from 'next/link'
import classes from './index.module.scss'
import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

const Categories = ({ categories }: { categories: Category[] }) => {
  console.log(categories)
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Einkaufen nach Kategorien</h3>
        <Link href="/products">Alle anzeigen</Link>
      </div>

      <div className={classes.list}>
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Categories
