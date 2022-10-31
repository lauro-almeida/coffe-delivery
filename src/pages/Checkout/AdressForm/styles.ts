import styled from 'styled-components'

export const FormComponent = styled.div``

const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: 400;

  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    &::placeholder {
      color: ${(props) => props.theme['base-input']};
    }
  }
`

export const ZIPInput = styled(BaseInput)`
  display: block;
`

export const StreetInput = styled(BaseInput)`
  width: 100%;
  display: block;
`

export const NumberInput = styled(BaseInput)`
  width: 200px;
`

export const ComplementInput = styled(BaseInput)`
  margin-left: 0.75rem;
  width: 348px;
`

export const NeighborhoodInput = styled(BaseInput)`
  width: 200px;
  margin-bottom: 0;
`
export const CityInput = styled(BaseInput)`
  margin-left: 0.75rem;
  width: 276px;
  margin-bottom: 0;
`
export const StateInput = styled(BaseInput)`
  margin-left: 0.75rem;
  width: 60px;
  margin-bottom: 0;
`
