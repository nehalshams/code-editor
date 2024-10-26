import { CardComponent } from '@/components/common/card/CardComponent'
import { programmingLanguages } from '@/data/PL'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-wrap gap-8 justify-center'>
    {
        programmingLanguages.map((language) => {
            return (
              <Link to={language.url}>
                <CardComponent title={language.languageName} bgColor={language.bgColor}>
                    {language.languageName}
                </CardComponent>
              </Link>
            )
        })
    }
    </div>
  )
}

export default Dashboard
