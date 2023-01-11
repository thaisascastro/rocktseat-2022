import { HandPalm, Play } from 'phosphor-react'

import { HomeContainer, StopCountdownButton } from './styled'
import { useEffect, useState } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { StartCountdownButton } from './components/NewCycleForm/styles'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    // arrendondar o método para baixao (floor)
    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
      if (activeCycle) {
        document.title = `${minutes}:${seconds}`
      }
    }, [minutes, seconds, activeCycle])

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
      <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <NewCycleForm />
          <Countdown
            activeCycle={activeCycle}
            setCycles={setCycles}
            activeCycleId={activeCycleId}
          />
          {activeCycle ? (
            <StopCountdownButton type="button" onClick={handleInterruptCycle}>
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton disabled={isSubmitDisabled} type="submit">
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )}
        </form>
      </HomeContainer>
    )
  }
}
