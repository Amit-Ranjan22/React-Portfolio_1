import { Drawer } from '@material-ui/core';
import React from 'react';

export default function DrawerComponent({handleDrawerToggler}) {
  return (
      <Drawer anchor='left' open={true} onClose={handleDrawerToggler}>
                hello world Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sequi maxime, omnis atque nobis eius.
            </Drawer>
  )
}
