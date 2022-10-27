## Why I wrote this? 
I've just borrowed CoDrone mini from programming club in my school. Honestly, I'd forgotten this until today - but tomorrow(Sep 22th) I must return it. I remembered the teacher asking me to record a video and test it. But maybe the manual - included with the drone box - was too old or like that, anyway I found the module - used in the manual book - was not on pypi. I think the uploader had deleted it - as I found another module. In short, I'm writing this for someone experiencing the same as me. 

## How to get the library 
First, go to [here](https://pypi.org/project/CoDrone-mini/#files) and download the whl file. And unzip it, so that you can see the whole code.
Of course you can just use `pip install CoDrone-mini`, but there's no docs so it's gonna be quite hard to code.

## Tutorial 
While I was writing this, I found the official manual - used with the module I found. You can see it in [here](https://learn.robolink.com/course/codrone-mini-with-python/). The choice about whether or not you see is yours :) 

## The basic code to get ready 
> Import Code 

```
import CoDrone_mini
from CoDrone_mini import Direction, Sequence
```

> `CoDrone` 

The basic class to connect and control CoDrone Mini. 
> `CoDrone.pair(port_name=None)` 

Pair with the controller - connected to computer with cable. Automatically finds the port if you don't set. 
> `CoDrone.isOpen()` 

Check if the controller is connected and ready to control. 
> `CoDrone.close()` 

Close connection with the controller. 

## How to get data from CoDrone 
> `CoDrone.get_altitude()` 

Get the CoDrone's altitude with barometer in cm. The data is absolute. 
> `CoDrone.get_height()` 

Get the CoDrone's height with barometer in cm. The data is relative - how much CoDrone's far from the ground. 
> `CoDrone.get_pressure()` 

Get the air pressure in Pa - I've no idea why this exists LOL 
> `CoDrone.get_drone_temp()` 

Get the temperature inside CoDrone - **not the around** - in Celsius. 
> `CoDrone.get_battery_percentage()` 

Get the percentage of CoDrone's battery. When it's None, the controller probably hasn't gotten the data. 
> `CoDrone.get_angle()`  

Get the string data of roll, pitch, yaw in degree. You can also access them with `angle.ROLL`, `angle.PITCH`, `angle.YAW`.
They range from -180 to 180 - left roll/yaw, backward pitch are negative degrees. 
> `CoDrone.get_trim()` 

Get the trim of CoDrone in list(maybe...?) 

## How to control CoDrone 
> `CoDrone.takeoff()` 

CoDrone takeoffs automatically. 
> `CoDrone.land()` 

CoDrone lands automatically. 
> `CoDrone.emergency_stop()` 

CoDrone stops all the motors. When you run this while flying, it will fall down, so you must be careful with this. 
> `CoDrone.set_speed(speed)` 

Set CoDrone's speed. Default is 3 (among 1, 2, 3) when you initialize your CoDrone instance. 
> `CoDrone.headless_on()` 

Turn on headless mode. 
> `CoDrone.headless_off()` 

Turn off headless mode. 
> `CoDrone.reset_sensor()` 

Reset all the sensors. 
> `CoDrone.set_roll(power)` 
> `CoDrone.set_pitch(power)` 
> `CoDrone.set_yaw(power)` 
> `CoDrone.set_throttle(power)` 

Set roll, pitch, yaw, throttle's power. The value can range from -100(%) to 100(%). 
> `CoDrone.move(*args)` 

When `args` is empty, CoDrone moves for 0.2 second. 
When `args` has one item, CoDrone moves for the time - `args[0]`. 
When `args` has four items, CoDrone moves for 0.2 seconds, with the roll, pitch, yaw, throttle(`args[0]`, `args[1]`, `args[2]`, `args[3]`). 
When `args` has five items, CoDrone moves for the time(`args[0]`), with the roll, pitch, yaw, throttle(`args[1]`, `args[2]`, `args[3]`, `args[4]`). 
> `CoDrone.go(direction, duration=0, power=50)` 

All-in-one version of the five above. 
When setting `direction`, you have to use `Direction` class which we imported in `from CoDrone_mini import Direction`. 
You can go in 6 directions, `Direction.FORWARD`, `Direction.BACKWARD`, `Direction.UP`, `Direction.DOWN`, `Direction.RIGHT`, `Direction.LEFT`. 
When `duration` is 0, it means infinite. If you want to limit the moving time, set `duration` in seconds. 
You can set `power` - ranges from -100(%) to 100(%). 
> `CoDrone.hover(duration=0)` 

CoDrone hovers for `duration` seconds. When 0, `duration` means infinite. 
> `CoDrone.turn(direction, duration=None, power=50)` 

CoDrone turns right and left. You should use `Direction` class to set `direction` var as well. 
When `duration` is None, CoDrone turns for 0.2 seconds. And when you set `duration`, CoDrone turns for `duration` seconds. 
You can set `power` - ranges from -100(%) to 100(%). 
> `CoDrone.set_trim(roll, pitch)` 

Set pitch and roll trim. 
> `CoDrone.reset_trim()` 

Only reset trim data. 

## Advanced flying skills 
> `CoDrone.fly_square()` 
> `CoDrone.fly_circle()` 
> `CoDrone.fly_spiral()` 
> `CoDrone.fly_triangle()` 
> `CoDrone.fly_hop()` 
> `CoDrone.fly_sway()` 
> `CoDrone.fly_zigzag()` 

Automatically demonstrate simple aerobatics. 
> `CoDrone.fly_sequecne(sequence)` 

All-in-one function of the seven functions above. 
When setting `sequence`, you have to use `Sequence` class which we imported in `from CoDrone_mini import Sequence`. 
You can do 7 flyings, `Sequences.SQUARE`, `Sequences.CIRCLE`, `Sequences.SPIRAL`, `Sequences.TRIANGLE`, `Sequences.HOP`, `Sequences.SWAY`, `Sequences.ZIGZAG`. 

## End 
Also there're some functions related to buzzers and leds, but I'm too tired to write anything more now.
Bye!

