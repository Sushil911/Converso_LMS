import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>
        Popular Companions
      </h1>
      <section className='home-section'>
        <CompanionCard
        id='123'
        name='Neura the Brainy Explorer'
        topic='Neural Network of the Brain'
        duration={45}
        subject='Science'
        color='#ffda6e'
        />
        <CompanionCard
        id='456'
        name='Countsy the Number Wizard'
        topic='Derivatives and Integrals'
        duration={30}
        subject='maths'
        color='#e5d0ff'
        />
        <CompanionCard
        id='789'
        name='Verba the Vocabulary Builder'
        topic='English Literature'
        duration={30}
        subject='language'
        color='#dbe7ff'
        />
      </section>
      <section className='home-section'>
        <CompanionsList
        title='Recently completed session'
        companions={recentSessions}
        classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page