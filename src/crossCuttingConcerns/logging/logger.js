export class BaseLogger{
    log(data){
       console.log(" Default Loger: " + data)
    }

}
// İNHERİTANCE
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("logged to elastic" + data)
    }
}
export class MongoLogger extends BaseLogger{
    log(data){
        console.log("logged to mongo" + data)
    }
}
// Bir tane class olusturduk ve o baselogger aslında defauşt olandır.
// Yani diğerleri onu extends edip kullanabilirler. Ama farklı bir loglama kullanmak
//isterlerse baseloggerdaki default logu override edip farklı bir yere loglama yapmak isteyebilirler