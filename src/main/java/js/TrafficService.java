package js;

import java.util.List;
import java.util.Map;

import javax.ws.rs.core.Response;

public interface TrafficService {
	
	public Map<String, Integer> getReportStats() throws Exception;
    
}
