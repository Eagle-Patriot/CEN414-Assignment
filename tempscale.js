function convertTemperatureScale(type, val){
    if(type == 1){
        val = (val - 32) / 1.8;
    }
    if(type == 2){
        val = (1.8 * val) + 32;
    }
    if(type == 3){
        val = 273 + val;
    }
    if(type == 4){
        val = val - 273;
    }
    if(type == 5){
        val = ((val - 32) / 1.8) + 273;
    }
    if(type == 6){
        val = ((val - 273) * 1.8) + 32;
    }
    return val;
}
