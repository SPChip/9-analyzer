const D = module.exports;

D.headerBytes = [
    0x5a, 0xa5
]

D.addresses = {
    0x20: 'ESC',
    0x21: 'BLE',
    0x22: 'BMS',
    0x23: 'Ext-BMS',
    0x00: '?-ESC',
    0x01: '?',
    0x3d: 'APP',
    0x3e: 'APP',
    0x3f: 'APP',
}

D.commands = {
    0x1:  'Read registers', // 01 -> 04
    0x4:  'Response read registers',
    0x3:  'Write registers w/ response',
    0x61: 'Read registers, update head',
    0x64: 'Update head display',
    0x65: 'Update head sensors'
}

D.registers = {
    0x00: 'Magic 0x515C',
    0x0D: 'Motor phase A current',
    0x0E: 'Motor phase B current',
    0x0F: 'Motor phase C current',
    0x10: 'ESC serial number',
    0x17: 'Scooter PIN',
    0x1A: 'ESC firmware version',
    0x1B: 'Error code',
    0x1C: 'Alarm code',
    0x1D: 'ESC status (boolean state word)',
    0x1F: 'Current operation mode, 0 NORMAL; 1 ECO; 2 SPORT',
    0x20: 'Volume of storage battery 1',
    0x21: 'Volume of storage battery 2',
    0x22: 'Battery level, 0-100%',
    0x24: 'Remaining mileage x0.8, km*100 (unit:10m)',
    0x25: 'Predicted remaining mileage, km*100 (unit:10m)',
    0x26: 'Current speed, 0.1km/h',
    0x29: 'Total mileage, m',
    0x2F: 'Current mileage,10m',
    0x32: 'Total operation time, sec',
    0x34: 'Total riding rime, sec',
    0x3A: 'Single operation time, sec',
    0x3B: 'Single riding time, sec',
    0x3E: 'Frame temperature, 0.1C',
    0x3F: 'Battery 1 temperature, 0.1C',
    0x40: 'Battery 2 temperature, 0.1C',
    0x41: 'MOS pipe temperature, 0.1C',
    0x47: 'ESC supply voltage (measured by ESC)',
    0x48: 'Battery voltage (from BMS)',
    0x49: 'Battery current (from BMS)',
    0x50: 'External battery temperature 2, 1C',
    0x53: 'Motor phase current, 0.01A',
    0x65: 'Average speed, 0.1km/h',
    0x66: 'External battery firmware version',
    0x67: 'Internal battery firmware version',
    0x68: 'BLE firmware version',
    0x70: 'Lock command (write 1 to lock), scooter reset automatically',
    0x71: 'Unlock command (write 1 to unlock), scooter reset automatically',
    0x72: 'Speed limit or speed limit release',
    0x73: 'Speed limit value in normal mode, 0.1km/h',
    0x74: 'Speed limit value in eco mode, 0.1km/h',
    0x75: 'Operating mode: 0 NORMAL; 1 ECO; 2 SPORT;',
    0x77: 'Start or shut down the engine',
    0x78: 'Reboot command (write 1 to reboot)',
    0x79: 'Powerdown command (write 1 to power off)',
    0x7A: '?',
    0x7B: 'KERS level',
    0x7C: 'Cruise control enable',
    0x7D: 'Tail light on',
    0xB0: 'Error code',
    0xB1: 'Alarm code',
    0xB2: 'ESC status (boolean state word)',
    0xB3: 'Volume of battery 1 and battery 2. Lower 8 for #1, higher for #2. 0-100%',
    0xB4: 'Battery level, 0-100%',
    0xB5: 'Current speed, 100m/h (1=0.1km/h)',
    0xB6: 'Average speed, 100m/h (1=0.1km/h)',
    0xB7: 'Total mileage, m',
    0xB9: 'Single mileage, m*10',
    0xBA: 'Single operation time',
    0xBB: 'Frame temperature, 0.1C',
    0xBC: 'Current speed limit value, with the lower 8b for current and higher 8b for full range, 0.1km/h',
    0xBD: 'Scooter power, unit:W',
    0xBE: 'Previous alarm code (for delay reset)',
    0xBF: 'Predicted remaining mileage, km*100 (unit:10m)',
    0xC6: 'Display mode of chassis lamp strip',
    0xC8: 'Color of chassis lamp strip 1',
    0xCA: 'Color of chassis lamp strip 2',
    0xCC: 'Color of chassis lamp strip 3',
    0xCE: 'Color of chassis lamp strip 4'
}

D.errors = {
    0x10: 'No communication with BLE board',
    0x11: 'Motor phase A current out of range',
    0x12: 'Motor phase B current out of range',
    0x13: 'Motor phase C current out of range',
    0x14: 'Throttle handle position out of range',
    0x15: 'Brake handle position out of range',
    0x18: 'Motor Hall sensors stuck at 0/1',
    0x19: 'Internal battery voltage out of range',
    0x20: 'External battery voltage out of range',
    0x21: 'No communication with internal BMS',
    0x22: 'Internal BMS config invalid',
    0x23: 'Internal BMS not activated (has default S/N)',
    0x24: 'Supply voltage out of range',
    0x27: 'ESC config invalid',
    0x32: 'No communication with IoT device',
    0x35: 'ESC not activated (has default S/N)',
    0x36: 'Internal BMS - ???',
    0x37: 'Internal BMS - ???',
    0x38: 'Charging overcurrent',
    0x39: 'Internal battery overheat',
    0x41: 'External battery overheat',
    0x42: 'No communication with external BMS',
    0x43: 'External BMS config invalid',
    0x44: 'External BMS not activated (has default S/N)',
    0x45: 'Internal BMS deep cell discharge',
    0x46: 'External BMS deep cell discharge',
    0x47: 'Internal BMS - ???',
    0x48: 'External BMS - ???',
    0x49: 'Internal BMS firmware version mismatch',
    0x50: 'External BMS firmware version mismatch'
}

D.isRegisterOperation = function(reg) {
    return (reg >= 0x01 && reg <= 0x04 /*|| reg === 0x61*/);
}