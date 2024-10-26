import { CardComponent } from '@/components/common/card/CardComponent'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { programmingLanguages } from '@/data/PL'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-wrap gap-8 justify-center md:py-20 py-8'>
      {
        programmingLanguages.map((language) => {
          return (
            <Link to={language.url}>
              <CardComponent
                title={language.languageName}
                bgColor={language.bgColor}
                subHeading={language.description}
              >
                <>
                  <div>
                    <Badge variant="outline" className=' border-border-dark' > Easy: {language.difficulty.easy}</Badge>
                    <Badge variant="outline" className='mx-3 border-border-dark'> Medium: {language.difficulty.medium}</Badge>
                    <Badge variant="outline" className='border-border-dark'> Hard: {language.difficulty.hard}</Badge>

                  </div>
                  <div className='flex justify-end mt-4'>
                    <Button>Explore</Button>
                  </div>
                </>
              </CardComponent>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Dashboard
