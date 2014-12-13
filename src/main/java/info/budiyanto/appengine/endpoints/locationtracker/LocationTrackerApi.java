package info.budiyanto.appengine.endpoints.locationtracker;

import javax.servlet.http.HttpServletRequest;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;

@Api(
		name = "locationtracker",
	    version = "v1",
	    scopes = {Constants.EMAIL_SCOPE},
	    clientIds = {Constants.WEB_CLIENT_ID, Constants.ANDROID_CLIENT_ID, Constants.IOS_CLIENT_ID, Constants.API_EXPLORER_CLIENT_ID},
	    audiences = {Constants.ANDROID_AUDIENCE}
)
public class LocationTrackerApi {
	
	@ApiMethod(httpMethod="get")
	public Location getLocation(HttpServletRequest req){
		String ipAddress = req.getRemoteAddr();
		String country = req.getHeader("X-AppEngine-Country");
		String region = req.getHeader("X-AppEngine-Region").toUpperCase();
		String city = req.getHeader("X-AppEngine-City");
		city = city.substring(0, 1).toUpperCase() + city.substring(1);
		String[] latlong = req.getHeader("X-AppEngine-CityLatlong").split(",");
		String latitude = latlong[0];
		String longtitude = latlong[1];
		System.out.println("IP Address: " + ipAddress);
		System.out.println("Country: " + country);
		System.out.println("Region: " + region);
		System.out.println("City: " + city);
		System.out.println("Latitude: " + latitude);
		System.out.println("Longtitude: " + longtitude);
		return new Location(ipAddress, country, region, city, latitude, longtitude);
	}
	
}
