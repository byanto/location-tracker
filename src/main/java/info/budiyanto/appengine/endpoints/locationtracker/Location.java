package info.budiyanto.appengine.endpoints.locationtracker;

public class Location {
	private String ipAddress;
	private String country;
	private String region;
	private String city;
	private String latitude;
	private String longtitude;
	
	public Location() {}
	
	public Location(String ipAddress, String country, String region, 
			String city, String latitude, String longtitude){
		this.ipAddress = ipAddress;
		this.country = country;
		this.region = region;
		this.city = city;
		this.latitude = latitude;
		this.longtitude = longtitude;
	}
	
	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	
	public String getLongtitude() {
		return longtitude;
	}
	public void setLongtitude(String longtitude) {
		this.longtitude = longtitude;
	}
	
	
}
