package js;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/traffic")
public class TrafficResource {
	
	TrafficService reportService;
	Map<String, Integer> data;
	
	
	public TrafficResource() {
		this.reportService = new TrafficServiceImpl();
		data = new HashMap<String, Integer>();
	}

	@GET
	@Path("/colwinjury")
	@Produces("text/plain")
	public String colWInjury() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("COLLISION WITH INJURY"));
	}
	
	@GET
	@Path("/colprivprop")
	@Produces("text/plain")
	public String colPrivProp() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("COLLISION/PRIVATE PROPERTY"));
	}
	
	@GET
	@Path("/col")
	@Produces("text/plain")
	public String col() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("COLLISION"));
	}
	
	@GET
	@Path("/collvng")
	@Produces("text/plain")
	public String colLvng() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("COLLISN/ LVNG SCN"));
	}
	
	@GET
	@Path("/crashService")
	@Produces("text/plain")
	public String crashService() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("Crash Service"));
	}
	
	@GET
	@Path("/crashUrgent")
	@Produces("text/plain")
	public String crashUrgent() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("Crash Urgent"));
	}
	
	@GET
	@Path("/livestock")
	@Produces("text/plain")
	public String livestock() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("LOOSE LIVESTOCK"));
	}
	
	@GET
	@Path("/debris")
	@Produces("text/plain")
	public String debris() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("TRFC HAZD/ DEBRIS"));
	}
	
	@GET
	@Path("/haz")
	@Produces("text/plain")
	public String haz() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("Traffic Hazard"));
	}
	
	@GET
	@Path("/imped")
	@Produces("text/plain")
	public String imped() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("Traffic Impediment"));
	}
	
	@GET
	@Path("/fire")
	@Produces("text/plain")
	public String fire() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("VEHICLE FIRE"));
	}
	
	@GET
	@Path("/stalled")
	@Produces("text/plain")
	public String stalled() throws Exception {
		if (this.data.isEmpty())
			this.data = this.reportService.getReportStats();

		return String.valueOf(data.get("ZSTALLED VEHICLE"));
	}

}
