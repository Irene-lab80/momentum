import React, { SyntheticEvent } from 'react';
import { Input } from '../styles';

type WeatherInputType = {
  weatherHandler: (e: SyntheticEvent<Element, Event>) => void;
  city: string;
  handleChange: (e: SyntheticEvent) => void;
}

const WeatherInput = ({ weatherHandler, city, handleChange }: WeatherInputType) => (
  <form onSubmit={weatherHandler}>
    <Input type="text" name="city" value={city} placeholder="City" onChange={handleChange} />
  </form>
);
export default WeatherInput;
