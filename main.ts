huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isLearned(1)) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
            basic.pause(2000)
        }
        if (huskylens.isLearned(2)) {
            basic.showIcon(IconNames.No)
        }
    }
})
