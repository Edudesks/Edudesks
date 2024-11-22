import FormStepComponent from '@/components/StudentComponent/FormStepComponent'
import React from 'react'
/**
 *
 * TODO: Add further functionalities to image component. User should be able to center image.
 * TODO: On click, user should also be able to edit image.
 */

const Student = () => {
  return (
    <div>Student
        <FormStepComponent step={0} />
        <FormStepComponent step={1} />
        <FormStepComponent step={2} />
        <FormStepComponent step={3} />
        <FormStepComponent step={4} />
    </div>
  )
}

export default Student