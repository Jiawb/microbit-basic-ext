
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

enum SignEnum {
    //% block=">"
    大于,
    //% block="≥"
    大于或等于,
    //% block="<"
    小于,
    //% block="≤"
    小于或等于,
    //% block="＝"
    等于,
    //% block="≠"
    不等于

}

/**
 * Custom blocks
 */
//% block="基本-扩展"
//% weight=115 color=#0066FF icon="\uf00a"
namespace custom {
   /**
    * 等待某引脚的模拟信号状态是否满足条件
    */
    //% block="等待引脚%p的模拟信号%singn %value||   侦测间隔%time_interval毫秒"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    //% time_interval.shadow=timePicker time_interval.defl=0 value.min=0 value.max=1023
    export function wait_until_analogPin_condition(p: AnalogPin, singn: SignEnum, value: number, time_interval?:number){
        while(true){
            let res: Number = pins.analogReadPin(p)
            let flag: boolean = false
            switch (singn) {
                case SignEnum.大于: {
                    flag = res > value
                    break
                }
                case SignEnum.大于或等于: {
                    flag = res >= value
                    break
                }
                case SignEnum.小于: {
                    flag = res < value
                    break
                }
                case SignEnum.小于或等于: {
                    flag = res <= value
                    break
                }
                case SignEnum.等于: {
                    flag = res == value
                    break
                }
                case SignEnum.不等于: {
                    flag = res != value
                    break
                }
                default: {
                    break;
                }
            }
            // 如果满足条件，结束此函数
            if(flag){
                return
            }
            if(time_interval > 0){
                basic.pause(time_interval)
            }
        }
    }

    /**
     * 等待某引脚的数字信号变为指定的数字
     */
    //% block="等待引脚%p的数字信号等于%value||   侦测间隔%time_interval毫秒"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    //% time_interval.shadow=timePicker time_interval.defl=0 value.min=0 value.max=1
    export function wait_until_digital_equalTo_value(p:DigitalPin,value:number,time_interval?:number){
        while(true){
            let res:number = pins.digitalReadPin(p)
            if(res == value){
                return
            }
            if(time_interval > 0){
                basic.pause(time_interval)
            }
        }
    }
}
