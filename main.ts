let Distancia = Math.round(maqueen.Ultrasonic(PingUnit.Centimeters))
pins.digitalWritePin(DigitalPin.P12, 1)
pins.digitalWritePin(DigitalPin.P8, 1)
basic.showNumber(3)
basic.forever(function () {
    Distancia = Math.round(maqueen.Ultrasonic(PingUnit.Centimeters))
    if (Distancia > 5) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) < 255) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 154)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) < 255) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 154)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            pins.digitalWritePin(DigitalPin.P12, 1)
        }
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    }
})
