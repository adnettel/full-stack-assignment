package js;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.core.Response;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

public class TrafficServiceImpl implements TrafficService {
	
	final String url = "http://www.cs.utexas.edu/~devdatta/traffic_incident_data.xml";

	// DB connection information would typically be read from a config file.
	public TrafficServiceImpl() {

	}
	
    public Map<String, Integer> getReportStats() throws Exception {
    	
    	NodeList data;
    	Map<String, Integer> countMap = new HashMap<String, Integer>();
		
		// Read and parse data from this.url
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        factory.setNamespaceAware(true);
        try {
        	Document dataDoc = factory.newDocumentBuilder().parse(new URL(this.url).openStream());
        	data = dataDoc.getElementsByTagName("ds:issue_reported");
        	
        	for (int i = 0; i < data.getLength(); ++i) {
        		String issue = data.item(i).getTextContent();
        		if (countMap.containsKey(issue)) {
        			countMap.put(issue, countMap.get(issue) + 1);
        		} else {
        			countMap.put(issue, 1);
        		}
        		
            }
        	
        } catch (Exception e) {
        	e.printStackTrace();
        }
        return countMap;
    }

}
