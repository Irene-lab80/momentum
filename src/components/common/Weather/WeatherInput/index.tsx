import React from 'react';
import { Input } from '../styles';

const WeatherInput = ({ weatherHandler, city, handleChange }: any) => (
  <form onSubmit={weatherHandler}>
    <Input type="text" name="city" value={city} placeholder="City" onChange={handleChange} />
  </form>
);
export default WeatherInput;
