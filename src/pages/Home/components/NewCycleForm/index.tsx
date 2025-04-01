import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../..";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Estudar React" />
        <option value="Estudar DSA" />
        <option value="Estudar Microserviços" />
      </datalist>

      <label htmlFor="minutesInAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesInAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        {...register('minutesInAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}