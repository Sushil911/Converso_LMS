import CompanionForm from '@/components/CompanionForm'
import React from 'react'

const NewCompanion = () => {
  return (
    <main className='min-lg:w-1/3 min-md:2/3 items-center justify-center'>
      <article className='w-full flex flex-col gap-4'>
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  )
}

export default NewCompanion