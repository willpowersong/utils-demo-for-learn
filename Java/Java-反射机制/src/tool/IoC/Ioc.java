package tool.IoC;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.Properties;

public class Ioc {
	//控制反转IoC,使用properties创建类
	
	public static String url="./object.properties";
	
	public String getValue(String type){
		Properties prop = new Properties();
		try(InputStream in = this.getClass().getClassLoader().getResourceAsStream(url)){
			try(InputStreamReader ins = new InputStreamReader(in,"UTF-8")){
				prop.load(ins);
			}
		}catch(java.io.FileNotFoundException e){
			e.printStackTrace();
		}catch(java.io.IOException e){
			e.printStackTrace();
		}
		return prop.getProperty(type);
	}
	public Object create(){
		String typeName = this.getValue("objectName");
		String value = this.getValue("values");
		Object obj = null;
		if(typeName!=null && value!=null){
			try{
//				obj = Class.forName(typeName).newInstance();
				Class aim = Class.forName(typeName);
				Class paramType=String.class;
				Constructor con = aim.getConstructor(paramType);
				obj = con.newInstance(value);
			}catch(InstantiationException e){
				e.printStackTrace();
			}catch(IllegalAccessException e){
				e.printStackTrace();
			}catch(ClassNotFoundException e){
				e.printStackTrace();				
			} catch (NoSuchMethodException e) {
				e.printStackTrace();
			} catch (SecurityException e) {
				e.printStackTrace();
			} catch (IllegalArgumentException e) {
				e.printStackTrace();
			} catch (InvocationTargetException e) {
				e.printStackTrace();
			}
		}
		return obj;
	}
	public static void main(String[] args){
		Ioc temp = new Ioc();
		Object x = temp.create();
		System.out.println(x);
	}
}
