import {
  CityInput,
  ComplementInput,
  FormComponent,
  NeighborhoodInput,
  NumberInput,
  StateInput,
  StreetInput,
  ZIPInput,
} from './styles'

import { useFormContext } from 'react-hook-form'

export function AdressForm() {
  const { register, setValue } = useFormContext()

  const checkZIP = (e: any) => {
    const zip = e.target.value.replace(/\D/g, '')
    console.log(zip)
    fetch(`https://viacep.com.br/ws/${zip}/json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setValue('street', data.logradouro)
        setValue('neighborhood', data.bairro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
      })
  }
  return (
    <FormComponent>
      <ZIPInput placeholder="CEP" {...register('zip')} onBlur={checkZIP} />
      <StreetInput placeholder="Rua" {...register('street')} />
      <NumberInput placeholder="Número" {...register('number')} />
      <ComplementInput
        placeholder="Complemento (opcional)"
        {...register('complement')}
      />
      <NeighborhoodInput placeholder="Bairro" {...register('neighborhood')} />
      <CityInput placeholder="Cidade" {...register('city')} />
      <StateInput placeholder="UF" {...register('state')} />
    </FormComponent>
  )
}
