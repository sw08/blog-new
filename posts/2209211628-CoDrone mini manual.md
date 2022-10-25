# CoDrone mini <br>

## Why I wrote this? <br>
I've just borrowed CoDrone mini from programming club in my school. Honestly, I'd forgotten this until today - but tomorrow(Sep 22th) I must return it.
I remembered the teacher asking me to record a video and test it. But maybe the manual - included with the drone box - was too old or like that,
anyway I found the module - used in the manual book - was not on pypi. I think the uploader had deleted it - as I found another module. In short, I'm writing this for someone experiencing the same as me. <br>

## How to get the library <br>
First, go to [here](https://pypi.org/project/CoDrone-mini/#files) and download the whl file. And unzip it, so that you can see the whole code.
Of course you can just use `pip install CoDrone-mini`, but there's no docs so it's gonna be quite hard to code.<br>

## Tutorial <br>
While I was writing this, I found the official manual - used with the module I found.
You can see it in [here](https://learn.robolink.com/course/codrone-mini-with-python/).
The choice about whether or not you see this is yours :) <br>

## The basic code to get ready <br>
> Import Code <br>

```
import CoDrone_mini
from CoDrone_mini import Direction, Sequence
```
<br>
> `CoDrone` <br>

The basic class to connect and control CoDrone Mini. <br>
> `CoDrone.pair(port_name=None)` <br>

Pair with the controller - connected to computer with cable. Automatically finds the port if you don't set. <br>
> `CoDrone.isOpen()` <br>

Check if the controller is connected and ready to control. <br>
> `CoDrone.close()` <br>

Close connection with the controller. <br>

## How to get data from CoDrone <br>
> `CoDrone.get_altitude()` <br>

Get the CoDrone's altitude with barometer in cm. The data is absolute. <br>
> `CoDrone.get_height()` <br>

Get the CoDrone's height with barometer in cm. The data is relative - how much CoDrone's far from the ground. <br>
> `CoDrone.get_pressure()` <br>

Get the air pressure in Pa - I've no idea why this exists LOL <br>
> `CoDrone.get_drone_temp()` <br>

Get the temperature inside CoDrone - **not the around** - in Celsius. <br>
> `CoDrone.get_battery_percentage()` <br>

Get the percentage of CoDrone's battery. When it's None, the controller probably hasn't gotten the data. <br>
> `CoDrone.get_angle()` <br> 

Get the string data of roll, pitch, yaw in degree. You can also access them with `angle.ROLL`, `angle.PITCH`, `angle.YAW`.<br>
They range from -180 to 180 - left roll/yaw, backward pitch are negative degrees. <br>
> `CoDrone.get_trim()` <br>

Get the trim of CoDrone in list(maybe...?) <br>

## How to control CoDrone <br>
> `CoDrone.takeoff()` <br>

CoDrone takeoffs automatically. <br>
> `CoDrone.land()` <br>

CoDrone lands automatically. <br>
> `CoDrone.emergency_stop()` <br>

CoDrone stops all the motors. When you run this while flying, it will fall down, so you must be careful with this. <br>
> `CoDrone.set_speed(speed)` <br>

Set CoDrone's speed. Default is 3 (among 1, 2, 3) when you initialize your CoDrone instance. <br>
> `CoDrone.headless_on()` <br>

Turn on headless mode. <br>
> `CoDrone.headless_off()` <br>

Turn off headless mode. <br>
> `CoDrone.reset_sensor()` <br>

Reset all the sensors. <br>
> `CoDrone.set_roll(power)` <br>
> `CoDrone.set_pitch(power)` <br>
> `CoDrone.set_yaw(power)` <br>
> `CoDrone.set_throttle(power)` <br>

Set roll, pitch, yaw, throttle's power. The value can range from -100(%) to 100(%). <br>
> `CoDrone.move(*args)` <br>

When `args` is empty, CoDrone moves for 0.2 second. <br>
When `args` has one item, CoDrone moves for the time - `args[0]`. <br>
When `args` has four items, CoDrone moves for 0.2 seconds, with the roll, pitch, yaw, throttle(`args[0]`, `args[1]`, `args[2]`, `args[3]`). <br>
When `args` has five items, CoDrone moves for the time(`args[0]`), with the roll, pitch, yaw, throttle(`args[1]`, `args[2]`, `args[3]`, `args[4]`). <br>
> `CoDrone.go(direction, duration=0, power=50)` <br>

All-in-one version of the five above. <br>
When setting `direction`, you have to use `Direction` class which we imported in `from CoDrone_mini import Direction`. <br>
You can go in 6 directions, `Direction.FORWARD`, `Direction.BACKWARD`, `Direction.UP`, `Direction.DOWN`, `Direction.RIGHT`, `Direction.LEFT`. <br>
When `duration` is 0, it means infinite. If you want to limit the moving time, set `duration` in seconds. <br>
You can set `power` - ranges from -100(%) to 100(%). <br>
> `CoDrone.hover(duration=0)` <br>

CoDrone hovers for `duration` seconds. When 0, `duration` means infinite. <br>
> `CoDrone.turn(direction, duration=None, power=50)` <br>

CoDrone turns right and left. You should use `Direction` class to set `direction` var as well. <br>
When `duration` is None, CoDrone turns for 0.2 seconds. And when you set `duration`, CoDrone turns for `duration` seconds. <br>
You can set `power` - ranges from -100(%) to 100(%). <br>
> `CoDrone.set_trim(roll, pitch)` <br>

Set pitch and roll trim. <br>
> `CoDrone.reset_trim()` <br>

Only reset trim data. <br>

## Advanced flying skills <br>
> `CoDrone.fly_square()` <br>
> `CoDrone.fly_circle()` <br>
> `CoDrone.fly_spiral()` <br>
> `CoDrone.fly_triangle()` <br>
> `CoDrone.fly_hop()` <br>
> `CoDrone.fly_sway()` <br>
> `CoDrone.fly_zigzag()` <br>

Automatically demonstrate simple aerobatics. <br>
> `CoDrone.fly_sequecne(sequence)` <br>

All-in-one function of the seven functions above. <br>
When setting `sequence`, you have to use `Sequence` class which we imported in `from CoDrone_mini import Sequence`. <br>
You can do 7 flyings, `Sequences.SQUARE`, `Sequences.CIRCLE`, `Sequences.SPIRAL`, `Sequences.TRIANGLE`, `Sequences.HOP`, `Sequences.SWAY`, `Sequences.ZIGZAG`. <br>

## End <br>
Also there're some functions related to buzzers and leds, but I'm too tired to write anything more now.
Bye!

