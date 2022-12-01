[_tb_system_call storage=system/_title_screen.ks]

[mask  time="0"  effect="fadeIn"  color="0x000000"  ]
[live2d_new  model_id="flower"  breath="true"  lip_time="0"  ]
[hidemenubutton]

[tb_clear_images]

[tb_keyconfig  flag="0"  ]
[tb_hide_message_window  ]
[live2d_show  name="flower"  x="-0.71"  y="-0.12"  scale="1.1"  ]
[bg  storage="haikei.png"  ]
[playbgm  volume="100"  time="5000"  loop="true"  storage="Shinryoku_mebuku_koro.m4a"  fadein="true"  ]
*tes

[tb_image_hide  time="1000"  ]
[mask_off  time="2000"  effect="fadeOut"  ]
[live2d_motion  name="flower"  mtn="Title"  ]
[tb_start_tyrano_code]
[plugin name=particle]
[particle storage=parameter.json target=message ]
[_tb_end_tyrano_code]

[wait  time="8000"  ]
[tb_image_show  time="1000"  storage="default/logo.png"  width="605"  height="144"  x="586"  y="171"  _clickable_img=""  name="img_11"  ]
[wait  time="3000"  ]
*title

[glink  color="ts04"  text="はじめから"  x="700"  y="380"  size="40"  target="*return"  width=""  height=""  _clickable_img=""  ]
[glink  color="ts04"  text="つづきから"  x="700"  y="520"  size="40"  target="*return"  width=""  height=""  _clickable_img=""  ]
[s  ]
*return

[tb_start_tyrano_code]
[particle_delete]
[_tb_end_tyrano_code]

[jump  storage="title_screen.ks"  target="*tes"  ]
