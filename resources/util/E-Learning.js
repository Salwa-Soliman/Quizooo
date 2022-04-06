/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://jsonkeeper.com/b/';

export async function getMaterial(course_code) {
  let material = [];
  await axios
    .get(BASE_URL + course_code)
    .then(response => {
      material = response.data;
      // console.log('http file', response.data);
    })
    .catch(e => console.warn(e));

  return material;
}
