function distanceFromHqInBlocks (customerBlock) {
    return Math.abs(42-customerBlock)
}

function distanceFromHqInFeet(customerBlock){
    return Math.abs(distanceFromHqInBlocks (customerBlock)) * 264
}

function distanceTravelledInFeet(startLocation, endLocation){
    return Math.abs(startLocation - endLocation) * 264
}

function calculatesFarePrice(startLocation, endLocation){
    const totalDistance = distanceTravelledInFeet(startLocation, endLocation)
    if (totalDistance <= 400){
        return 0
    }
    else if (totalDistance < 2000){
        return (totalDistance - 400) * 0.02
    }
    else if (totalDistance >= 2000 && totalDistance <= 2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}