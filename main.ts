let Distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
basic.forever(function () {
    if (Distancia > 5) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) > 150) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 154)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) > 150) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 154)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            pins.digitalWritePin(DigitalPin.P12, 1)
        }
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
