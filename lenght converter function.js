function killometerToMeter(killometer){
    const convertionValue = 0.62137119223
    const meter = killometer * convertionValue
    return meter

}
console.log(killometerToMeter(200))